// Save token to localStorage
export const saveToken = (token) => {
	localStorage.setItem("jwtToken", token);
};

// Get token from localStorage
export const getToken = () => {
	return localStorage.getItem("jwtToken");
};

// Remove token from localStorage
export const logout = () => {
	localStorage.removeItem("jwtToken");
};
