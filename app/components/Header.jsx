"use client";
import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { HiSearch, HiBell, HiChat } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import app, { db } from "./../Shared/firebaseConfig";
import Link from "next/link";
import PinBuilder from "../pin-builder/page";

const Header = () => {
	const { data: session } = useSession();
	const router = useRouter();
	// const db = getFirestore(app);

	useEffect(() => {
		saveUserInfo();
	}, [session]);

	const saveUserInfo = async () => {
		if (session?.user) {
			await setDoc(doc(db, "user", session.user.email), {
				userName: session.user.name,
				email: session.user.email,
				userImage: session.user.image,
			});
		}
	};
	const onCreateClick = () => {
		if (session) {
			router.push("/pin-builder");
		} else {
			signIn();
		}
	};

	return (
		<div className='flex justify-between  gap-3 md:gap-2 items-center p-8'>
			{/* <Link href='/'> */}
			<Image
				src='/logo.png'
				alt='logo'
				width={60}
				height={60}
				onClick={() => router.push("/")}
				className='hover:bg-gray-300 p-2  rounded-full cursor-pointer'
			/>
			{/* </Link> */}
			<button
				className='bg-black
         text-white p-3 px-6 rounded-full
         text-[25px]
          hidden md:block'
				onClick={() => router.push("/")}>
				Home
			</button>
			<button
				className='font-semibold p-3 px-6
         rounded-full text-[25px]'
				onClick={() => onCreateClick()}>
				Create
			</button>
			<div className='sm:hidden md:flex bg-[#e9e9e9] p-3 px-6  gap-3 items-center rounded-full w-full '>
				<HiSearch className='text-[34px]  text-gray-500' />
				<input
					type='text'
					placeholder='Search'
					className='bg-transparent outline-none w-full text-[25px]'
				/>
			</div>
			<HiSearch className='text-[25px]  text-gray-500 md:hidden' />
			<HiBell className='text-[25px] md:text-[60px] text-gray-500 cursor-pointer' />
			<HiChat className='text-[25px] md:text-[60px] text-gray-500 cursor-pointer' />
			{session?.user ? (
				<Image
					src={session.user.image}
					onClick={() => router.push("/" + session.user.email)}
					alt='user-image'
					width={60}
					height={60}
					className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'
				/>
			) : (
				<button
					className='font-semibold p-2 px-4 rounded-full'
					onClick={() => signIn()}>
					Login
				</button>
			)}
		</div>
	);
};

export default Header;
