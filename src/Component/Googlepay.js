import axios from 'axios';

const fetchMyExercises = async () => {
    try {
        // Add any necessary headers or parameters
        const response = await axios.get('http://localhost:4000/user/getmyexercises', {
            headers: {
                // Include auth token or any other required headers
                Authorization: `Bearer ${token}` // Adjust token as needed
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching my exercises:', error);
    }
};
export default fetchMyExercises;
