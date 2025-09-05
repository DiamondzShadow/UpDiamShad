"use client";

import React from "react";
import { useNotifications, Notification } from "@/hooks/useNotifications";
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";

const iconMap = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

const colorMap = {
  success: "border-green-500 bg-green-500/10 text-green-300",
  error: "border-red-500 bg-red-500/10 text-red-300",
  warning: "border-yellow-500 bg-yellow-500/10 text-yellow-300",
  info: "border-blue-500 bg-blue-500/10 text-blue-300",
};

interface NotificationItemProps {
  notification: Notification;
  onRemove: (id: string) => void;
}

function NotificationItem({ notification, onRemove }: NotificationItemProps) {
  const Icon = iconMap[notification.type];
  const colorClass = colorMap[notification.type];

  return (
    <div
      className={`
        relative overflow-hidden rounded-lg border bg-black p-4 shadow-lg transition-all duration-300 
        hover:shadow-xl ${colorClass}
      `}
      role="alert"
    >
      <div className="flex items-start space-x-3">
        <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-white">
            {notification.title}
          </h4>
          {notification.message && (
            <p className="mt-1 text-sm opacity-90">{notification.message}</p>
          )}
          {notification.action && (
            <button
              onClick={notification.action.onClick}
              className="mt-2 text-xs font-medium underline hover:no-underline transition-all"
            >
              {notification.action.label}
            </button>
          )}
        </div>
        <button
          onClick={() => onRemove(notification.id)}
          className="flex-shrink-0 text-white/60 hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export function NotificationContainer() {
  const { notifications, removeNotification } = useNotifications();

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-[9999] space-y-2 w-80 max-w-sm">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onRemove={removeNotification}
        />
      ))}
    </div>
  );
}

export default NotificationContainer;
