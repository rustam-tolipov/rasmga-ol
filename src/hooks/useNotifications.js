import { useQuery } from "@tanstack/react-query";
import { getNotifications } from "../services/apiUsers";

const useNotifications = () => {
  const {
    notificationsLoading,
    data: notifications,
    error,
  } = useQuery({
    queryKey: ["notifications"],
    queryFn: getNotifications,
  });

  return { notificationsLoading, notifications, error };
};

export default useNotifications;
