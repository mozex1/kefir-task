import {Spinner} from "../Spinner";

type Props = {
    onClick: () => void;
    isLoading?: boolean;
};

const Button = ({onClick, isLoading = false}: Props) => {
    return (
        <button
            onClick={onClick}
            className="w-[234px] rounded-lg m-auto text-center px-3 py-2 bg-[#313439] flex items-center justify-center"
        >
            {isLoading ? <Spinner /> : "Загрузить еще"}
        </button>
    );
};

export default Button;
