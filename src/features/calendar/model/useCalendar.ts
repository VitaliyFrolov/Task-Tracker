import { useGetEventsQuery } from "@/entities/event";
  
export const useCalendar = () => {
    const { data: events = [], isLoading } = useGetEventsQuery({});

    const handleAddEvent = async (title: string, date: string) => {
        console.log(title, date);
    };

    const handleRemoveEvent = async (id: string) => {
        console.log(id);
    };

    return { 
        events, 
        isLoading, 
        handleAddEvent, 
        handleRemoveEvent 
    };
};
  