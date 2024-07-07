import "./OrderStatusComponent.css"

function OrderStatusComponent({orderId = 0, status = "неизвестно"}) {
    return (
        <div className={status === "обработан" ? "orderStatusContainer success" : status === "в пути" ? "orderStatusContainer ways" : status === "доставлен" ? "orderStatusContainer delivered" : "orderStatusContainer"}>
            <h2>Заказ #[{orderId}]: [{status}]</h2>
        </div>
    )
}

export default OrderStatusComponent;