import { useContext, useEffect, useState } from "react";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Apis, { endpoints } from "../../configs/Apis";
import { Link } from "react-router-dom";
import { MyCartContext } from "../../configs/Contexts";

const Header = () => {
    const [categories, setCategories] = useState([]);
    const [cartCounter,] = useContext(MyCartContext);

    const loadCates = async () => {
        let res = await Apis.get(endpoints['categories']);
        setCategories(res.data);
    }

    useEffect(() => {
        loadCates();
    }, []);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">E-commerce website</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className="nav-link">Trang chủ</Link>
                            <NavDropdown title="Danh mục" id="basic-nav-dropdown">
                                {categories.map(cate => <Link className="dropdown-item" key={cate.id} to={`/?cateId=${cate.id}`}>{cate.name}</Link>)}
                            </NavDropdown>
                            <Link to="/" className="nav-link">Giỏ hàng <Badge variant={"danger"}> {cartCounter}</Badge></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;