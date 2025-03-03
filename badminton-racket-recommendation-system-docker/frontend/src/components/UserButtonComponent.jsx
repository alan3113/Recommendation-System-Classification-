
import UserIcon from "./UserIcon"
function UserButtonComponent({ buttonText, onClick, current }) {
    const isSelected = buttonText === current

    return (
        <button
            className={`w-[200px] py-4 px-4 shadow shadow-gray-600 flex flex-row items-center justify-center  ${buttonText === current ? 'bg-white text-black font-bold' : ' text-white font-bold'}`}
            onClick={() => onClick(buttonText)}
        >
            <UserIcon fill={!isSelected ? '#ffffff' : '#000000'} buttonText={buttonText} />

            <span className="pl-2">{buttonText}</span>
        </button>

    )

}

export default UserButtonComponent