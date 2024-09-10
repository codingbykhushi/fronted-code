function Prductitem(props) {
    return (
        <>
            <div class="card" style={{ width: "14rem", float: 'left' }}>
                <img src={props.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <h4> Price:{props.price}</h4>
                    <p class="card-text">Discount:{props.discountPercentage}</p>
                    <p class="card-text">Stock:{props.stock}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}
export default Prductitem;