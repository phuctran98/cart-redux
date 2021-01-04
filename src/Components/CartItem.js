import React from 'react';

class CartItem extends React.Component {
    render() {
        return (
            <tr>
                <th scope="row">
                    <img src="https://dienthoaimoi.vn/images/news/2020/10/14/original/tiet-lo-moi-pin-iphone-12_1602643297.jpg"
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>Iphone 6 Plus</strong>
                    </h5>
                </td>
                <td>15$</td>
                <td className="center-on-small-only">
                    <span className="qty">1 </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a>—</a>
                        </label>
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>15$</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item">
                        X
                    </button>
                </td>
            </tr>
        );
    }
}


export default CartItem;
