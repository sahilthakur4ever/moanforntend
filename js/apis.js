const API_BASE_URL = "http://localhost:8080/user";

async function changePassword(oldPassword, newPassword, confirmPassword) {
    const response = await fetch(`${API_BASE_URL}/changePassword`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            oldPassword: oldPassword,
            newPassword: newPassword,
            confirmPassword: confirmPassword,
        }),
    });

    const result = await response.json();
    
    if (response.ok) {
        alert("Password changed successfully!");
    } else {
        alert(`Error: ${result.message || "Failed to change password"}`);
    }
}

