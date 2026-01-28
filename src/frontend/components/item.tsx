interface ItemProps {
    title: string;
    price: number;
}

{/* Los parametros que recibe el componente deben estar en el orden de la interface */}
export const Item = (props: ItemProps) => {
    return (
        <div className="bg-slate-100 p-6 rounded-lg shadow-sm border">
            <h3 className="font-bold">{props.title}</h3>
            <p className="text-sm text-gray-500">${props.price}</p>
        </div>
    )
}