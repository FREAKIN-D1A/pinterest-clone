import app from "@/app/Shared/firebaseConfig";
import React, { useEffect } from "react";
import PinItem from "./PinItem";
import { db } from "@/app/Shared/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

function PinList({ listOfPins }) {
	// useEffect(() => {
	// 	getUserPins();
	// }, []);
	// const getUserPins = async () => {
	// 	console.log("userinfo is given:", userInfo);
	// 	const q = query(
	// 		collection(db, "pinterest-post"),
	// 		where("email", "==", userInfo.email)
	// 	);

	// 	const querySnapshot = await getDocs(q);
	// 	querySnapshot.forEach((doc) => {
	// console.log(doc.id, "= >", doc.data());
	console.log("listOfPins is given:", listOfPins);
	// 	});
	// };

	return (
		<div className='mt-7 px-2 md:px-5 columns-2 md:columns-3 lg:columns-4 mb-4 xl:columns-5 space-y-6 mx-auto'>
			{listOfPins.map((item, index) => (
				<PinItem pin={item} />
			))}
		</div>
	);
}

export default PinList;
