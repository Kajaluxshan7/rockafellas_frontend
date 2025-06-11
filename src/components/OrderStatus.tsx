"use client"; // if using Next.js app directory

import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

let socket: Socket;

export default function OrderStatus() {
  const [status, setStatus] = useState<string>("Waiting for updates...");
  const orderId = "order123"; // Use real order ID here
  useEffect(() => {
    console.log("Connecting to socket...");
    socket = io("http://localhost:4000");

    socket.on("connect", () => {
      console.log("Connected to socket server", socket.id);
      socket.emit("joinOrderRoom", orderId);
    });

    socket.on("orderStatusUpdate", (data) => {
      console.log("Received order status update:", data);
      setStatus(
        `${data.status} (at ${new Date(data.timestamp).toLocaleTimeString()})`
      );
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    return () => {
      socket.emit("leaveOrderRoom", orderId);
      socket.disconnect();
    };
  }, [orderId]);

  return (
    <div className="p-4 bg-gray-100 rounded shadow max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-2">Order Status</h2>
      <p>{status}</p>
    </div>
  );
}
