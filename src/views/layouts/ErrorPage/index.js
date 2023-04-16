import template from './ErrorPage.hbs'
import { ErrorPageContent } from '../../components/index';
import { errors } from '../../../mockData';

const ErrorPage = (errorCode) => {
    const context = {
        ErrorPageContent: ErrorPageContent(),
        image: errors[errorCode],
    }

    const source = { ...context }

    return template(source)
}

export default ErrorPage;
