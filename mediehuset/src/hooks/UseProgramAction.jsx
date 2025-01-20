export const useProgramActions = () => {
    const addToProgram = async (eventId) => {
      try {
        const response = await fetch("https://api.mediehuset.net/mediesuset/usertickets", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, 
          },
          body: JSON.stringify({ event_id: eventId }),
        });
  
        if (response.ok) {
          console.log("Event added to Mit Program");
        } else {
          console.error("Failed to add event");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    return { addToProgram };
  };
  