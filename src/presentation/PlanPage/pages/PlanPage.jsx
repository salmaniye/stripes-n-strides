import React, { useState, useEffect, useContext } from "react";
import { getPlans } from "../../../utils/apiEndpoints";
import "./PlanPage.css";
import { GlobalContext } from "../../../contexts/GlobalContext";

const PlanPage = () => {
  const [plans, setPlans] = useState([]);
  const { user, setUser } = useContext(GlobalContext);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await getPlans();
        setPlans(res.data);
      } catch (error) {
        console.error("Error fetching plans:", error);
        setPlans([]);
      }
    };

    fetchPlans();
  }, []);

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner":
        return "green";
      case "Intermediate":
        return "orange";
      case "Advanced":
        return "red";
      case "Expert":
        return "purple";
      default:
        return "black";
    }
  };

  const handlePlanSelection = (planId) => {
    setUser({ ...user, plan_id: planId });
  };

  return (
    <div
      style={{
        height: "calc(100vh - 176px)",
        maxHeight: "calc(100vh - 176px)",
        marginTop: "88px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {plans.map((plan) => (
        <div
          key={plan.id}
          className="plan-card"
          style={{
            position: "relative",
            display: "flex",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "10px",
            backgroundColor: user.plan_id === plan.id ? "#e6f7ff" : "white", // Conditional styling
          }}
          onClick={() => handlePlanSelection(plan.id)} // onClick event
        >
          <div
            style={{
              flex: "1",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h5>{plan.name}</h5>
              <p>{plan.description}</p>
              <p style={{ color: getLevelColor(plan.level) }}>
                Level: {plan.level}
              </p>
              <p>Distance Goal: {plan.distance_goal}km</p>
            </div>
          </div>
          <img
            src={plan.image_url}
            alt={plan.name}
            style={{
              height: "50px",
              objectFit: "cover",
              position: "absolute",
              bottom: "5px",
              right: "5px",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default PlanPage;
