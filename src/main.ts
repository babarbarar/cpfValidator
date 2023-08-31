import express from "express";
import { validateCpf } from "./CpfValidator";
const app = express();
app.use(express.json());

app.post("/checkout", function (req, res) {
	const isValidCpf = validateCpf(req.body.cpf);
	if (isValidCpf) {
		res.end();
	}
	res.status(422).json({
		message: "Invalid cpf"
	});
});

app.listen(3090);


// app.use(express.json());

// app.post("/checkout", async function (req, res) {
// 	const isValid = validateCpf(req.body.cpf);
// 	if (!isValid) {
// 		return res.status(422).json({
// 			message: "Invalid cpf"
// 		});
// 	}
// 	let total = 0;
// 	for (const item of req.body.items) {
// 		// const product = products.find((product) => product.idProduct === item.idProduct);
// 		const [product] = await connection.query("select * from cccat9.product where id_product = $1", [item.idProduct]);
// 		if (product) {
// 			total += parseFloat(product.price) * item.quantity;
// 		} else {
// 			return res.status(422).json({
// 				message: "Product not found"
// 			});
// 		}
// 	}
// 	if (req.body.coupon) {
// 		// const coupon = coupons.find(coupon => coupon.code === req.body.coupon);
// 		const [coupon] = await connection.query("select * from cccat9.coupon where code = $1", [req.body.coupon]);
// 		if (coupon) {
// 			total -= (total * coupon.percentage)/100;
// 		}
// 	}
// 	res.json({
// 		total
// 	});
// });