import { useContext, useEffect, useState } from "react";
import { Alert, Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import Apis, { endpoints } from "../configs/Apis";
import { useSearchParams } from "react-router-dom";
import cookie from 'react-cookies'
import { MyCartContext } from "../configs/Contexts";

const Home = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState();
    const [params] = useSearchParams();
    const [, cartDispatch] = useContext(MyCartContext);

    const loadProducts = async () => {

        let url = `${endpoints["products"]}?page=${page}`;

        if (query) {
            url = `${url}&kw=${query}`;
        }

        let cateId = params.get("cateId");
        if (cateId)
            url = `${url}&categoryId=${cateId}`;

        try {
            setLoading(true);
            let res = await Apis.get(url);

            if (res.data.length == 0 && page > 1)
                page = 0;
            else {
                if (page <= 1)
                    setProducts(res.data);
                else
                    setProducts([...products, ...res.data]);
            }

            console.log(url);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        let timer = setTimeout(() => {
            if (page > 0)
                loadProducts();
        }, 500);

        return () => clearTimeout(timer);
    }, [page, query, params]);

    useEffect(() => {
        setPage(1);
    }, [query, params]);

    const loadMore = () => {

        setPage(page + 1);
    }

    const order = (product) => {
        let cart = cookie.load("cart") || null;
        if (cart === null)
            cart = {};

        if (product.id in cart) {
            cart[product.id]["quantity"]++;

        } else {
            cart[product.id] = {
                "id": product.id,
                "name": product.name,
                "price": product.price,
                "quantity": 1
            }
        }

        cookie.save("cart", cart);

        console.log(cart);

        cartDispatch({
            "type": "update"
        });

    }

    return (
        <>
            <Form className="mt-2">
                <Form.Group className="mb-3">
                    <Form.Control value={query} onChange={e => setQuery(e.target.value)} type="text" placeholder="Nhập từ khóa tìm kiếm..." />
                </Form.Group>
            </Form>

            {(products == null || products.length === 0) && <Alert variant="info">Không có sản phẩm nào!</Alert>}

            {loading ? <Spinner animation="border" variant="primary" /> :
                <Row>
                    {products.map(product =>
                        <Col key={product.id} xs={6} md={3} className="p-1">
                            <Card>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        {product.price} VNĐ
                                    </Card.Text>
                                    <div className="d-flex justify-content-between">
                                        <Button variant="primary">Xem chi tiết</Button>
                                        <Button variant="danger" onClick={() => order(product)}>Đặt hàng</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            }

            <div className="mt-2 mb-2 text-center">
                <Button onClick={loadMore} variant="primary">Xem thêm...</Button>
            </div>

        </>
    );
}

export default Home;