export const register = async (email, first_name, last_name) => {
  if (!email || !first_name || !last_name) {
    return {
      status: false,
      message: " None of email, first name or last name can be empty",
    };
  } else {
    const postData = {
      email,
      first_name,
      last_name,
    };

    try {
      const res = await fetch("http://localhost:3001/users/", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      if (res.ok) {
        return {
          status: true,
          message: "User successfully created",
        };
      }
    } catch (error) {
      console.error("Error making POST request:", error);
      throw error; // Re-throw the error to be caught by the caller
    }
  }
};

export const login = async (email) => {
  if (!email) {
    return {
      status: false,
      message: " Please enter email",
    };
  } else {
    try {
      function findUserByEmail(email, users) {
        for (let i = 0; i < users.length; i++) {
          if (users[i].email === email) {
            return users[i];
          }
        }
        return null; // Return null if the email is not found
      }

      const data = await fetch("http://localhost:3001/users/")
        .then((response) => response.json())
        .then((json) => json);

      const foundUser = findUserByEmail(email, data);

      if (foundUser) {
        return {
          status: true,
          data: foundUser,
        };
      } else {
        return {
          status: false,
          message: "No user found",
        };
      }
    } catch (error) {
      console.error("Error making POST request:", error);
      throw error; // Re-throw the error to be caught by the caller
    }
  }
};

export const getAchievement = async (user_id) => {
  if (!user_id) {
    return {
      status: false,
      message: " Please send user id",
    };
  } else {
    try {
      function getUserAchievements(user_id, achievements) {
        return achievements.filter(
          (achievement) => achievement.user_id === user_id
        );
      }

      const data = await fetch("http://localhost:3001/achievements/")
        .then((response) => response.json())
        .then((json) => json);

      const userAchievements = getUserAchievements(user_id, data);

      userAchievements.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );

      if (userAchievements.length > 0) {
        return {
          status: true,
          data: userAchievements,
        };
      } else {
        return {
          status: false,
          message: "No user achievement",
        };
      }
    } catch (error) {
      console.error("Error making POST request:", error);
      throw error; // Re-throw the error to be caught by the caller
    }
  }
};

export const postAchievement = async (user_id, challenge) => {
  if (!user_id || !challenge) {
    return {
      status: false,
      message: " Please send all needed data",
    };
  } else {
    try {
      const date = new Date(); // Current date and time
      const timestamp = date.toISOString();

      const postData = {
        user_id,
        plan_id: challenge.plan_id,
        plan_name: challenge.plan_name,
        challenge_id: challenge.id,
        prey_type: challenge.prey_type,
        image_url: challenge.image_url,
        distance: +challenge.distance,
        timestamp,
      };

      const res = await fetch("http://localhost:3001/achievements/", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      if (res.ok) {
        return {
          status: true,
          message: "User achievement submitted",
        };
      }
    } catch (error) {
      console.error("Error making POST request:", error);
      throw error; // Re-throw the error to be caught by the caller
    }
  }
};

export const getPlans = async () => {
  try {
    const data = await fetch("http://localhost:3001/plans/")
      .then((response) => response.json())
      .then((json) => json);

    if (data.length > 0) {
      return {
        status: true,
        data,
      };
    } else {
      return {
        status: false,
        message: "No plans found",
      };
    }
  } catch (error) {
    console.error("Error making GET request:", error);
    throw error; // Re-throw the error to be caught by the caller
  }
};

export const getBadges = async () => {
  try {
    const data = await fetch("http://localhost:3001/badges/")
      .then((response) => response.json())
      .then((json) => json);

    if (data.length > 0) {
      return {
        status: true,
        data,
      };
    } else {
      return {
        status: false,
        message: "No badges found",
      };
    }
  } catch (error) {
    console.error("Error making GET request:", error);
    throw error; // Re-throw the error to be caught by the caller
  }
};

export const getChallenge = async (id) => {
  try {
    const data = await fetch(`http://localhost:3001/challenges/${id}`)
      .then((response) => response.json())
      .then((json) => json);

    if (data) {
      return {
        status: true,
        data,
      };
    } else {
      return {
        status: false,
        message: "No challenge found",
      };
    }
  } catch (error) {
    console.error("Error making GET request:", error);
    throw error; // Re-throw the error to be caught by the caller
  }
};

export const getHunger = async (user_id, plan_id) => {
  try {
    const plans = await fetch(`http://localhost:3001/plans`)
      .then((response) => response.json())
      .then((json) => json);
    const { points_goal } = plans.filter((p) => p.id === plan_id)[0];

    const { data: achievements } = await getAchievement(user_id);

    if (achievements) {
      return {
        status: true,
        percentage: (achievements.length / points_goal) * 100,
      };
    } else {
      return {
        status: false,
        message: "No challenge found",
      };
    }
  } catch (error) {
    console.error("Error making GET request:", error);
    throw error; // Re-throw the error to be caught by the caller
  }
};
