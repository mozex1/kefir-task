import React, {ReactNode} from "react";

type Props = {
    children: ReactNode;
};

// Этот компонент должен принимать type и быть общим для разного рода Notification
const ErrorNotification = ({children}: Props) => {
    return (
        <div className="w-full p-3 max-h-full rounded-lg text-14 font-medium bg-[#ffbbbb] text-[#E91616]">
            {children}
        </div>
    );
};

export default ErrorNotification;
