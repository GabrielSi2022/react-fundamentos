export default function Avatar(props: any){
    return (
        <img className= {props.marginTop ? 'w-[calc(3rem+12px)] h-[calc(3rem+12px)] mt-[calc(0px-1.5rem-6px)] border-[2px] border-green-500 outline-[2px] outline-gray-800 rounded-lg' : "w-12 h-12 mt-0 rounded-lg " } src={props.src} alt="icone user" />
    );
}