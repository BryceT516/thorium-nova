import uniqid from "@thorium/uniqid";
import {useEffect, useState} from "react";
import {stableValueHash} from "./stableValueHash";
import {useLiveQuery} from "./liveQueryContext";

const requestMap = new Map<string, Set<string>>();

export function useRequestSub(requestParams: {path: string; params?: any}) {
  const id = stableValueHash([requestParams.path, requestParams.params]);
  const [hookId] = useState(uniqid());
  const {socket, reconnectionState} = useLiveQuery();
  const isConnected = reconnectionState === "connected";
  useEffect(() => {
    if (!socket || !isConnected) return;
    if (!requestMap.has(id)) {
      requestMap.set(id, new Set());
    }
    if (requestMap.get(id)?.size === 0) {
      // Subscribe to the effect
      socket.send("netRequest", {...requestParams, id: id});
    }

    requestMap.get(id)?.add(hookId);

    return () => {
      requestMap.get(id)?.delete(hookId);
      if (!requestMap.get(id) || requestMap.get(id)?.size === 0) {
        // Unsubscribe from the effect
        socket.send("netRequestEnd", {id: id});
      }
    };
    // The request ID is a stable way to represent the missing dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket, hookId, id, isConnected]);
}
