import { AUTH } from "../../../lib/API";
import { methodType, requestApiWithoutBodyWithToken } from "../../../lib/REQUEST_API";

function* getAuthInfo() {
	try {
		const REQUEST_URL = AUTH.GET_INFO_BY_ACCESS();
		const METHOD = methodType.GET;

		const res = requestApiWithoutBodyWithToken(METHOD, REQUEST_URL);

		console.log(res);
	} catch (error) {
		console.log(error);
	}
}
