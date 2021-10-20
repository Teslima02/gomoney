import { RequestHandler } from 'express';
import { auth } from '../../../services';

interface responseType {
  prettyMessage: string;
  status: number;
  data?: {
    accessToken: string;
    userId: string;
    refreshToken: string;
  };
  success: boolean;
  message?: string;
}

const loginController: RequestHandler = async (req, res) => {
  try {
    const { found, authorized, data } = await auth.loginUserService(req.body);
    if (!found) {
      const notFound: responseType = {
        prettyMessage: 'User not registered.',
        status: 401,
        success: false,
      };
      res.status(notFound.status);
      res.send(notFound);
      return;
    }
    if (found && !authorized) {
      const notAuthorized: responseType = {
        prettyMessage: 'User not Authorized.',
        status: 401,
        success: false,
      };
      res.status(notAuthorized.status);
      res.send(notAuthorized);
      return;
    }

    const authorizedResponse: responseType = {
      prettyMessage: 'User Authorized.',
      status: 200,
      success: false,
      data,
    };
    res.status(authorizedResponse.status);
    res.send(authorizedResponse);
  } catch (err) {
    const response: responseType = {
      prettyMessage: err.prettyMessage || 'Internal Server Error.',
      status: err.status || 501,
      success: false,
    };

    res.status(response.status);
    res.send(response);
  }
};

export default loginController;
