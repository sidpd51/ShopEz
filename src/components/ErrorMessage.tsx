
type ErrorMessageProps = {
    message: string | undefined;
}
const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return (
        <div className="flex items-center text-sm text-red-600 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <div>
                <span className="font-normal ms-1">{message}</span>
            </div>
        </div>
    )
}

export default ErrorMessage
