import axios from 'axios';

const GetCardByUserId = async(userId) => {
	try {
		let response =  await axios.get(`${server_url}/card/user/${userId}`);
		// console.log("******GET***", response);
		return response;
	}

	catch (error) {
		console.log(error);
	}
}

export {GetCardByUserId};
