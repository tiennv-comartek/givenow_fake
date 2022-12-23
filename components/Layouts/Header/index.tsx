import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import logo from "../../../public/images/logo.png";

function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [activeMenuIndex, setActiveMenuIndex] = useState<number>(0);

  const menuItem = [
    { name: "Trang chủ", href: "/", current: true },
    { name: "Dự án", href: "/projects", current: false },
    { name: "Về chúng tôi", href: "#", current: false },
    { name: "FAQs", href: "#", current: false },
    { name: "Ủng hộ", href: "#", current: false },
  ];

  useEffect(() => {
    if (router.pathname) {
      menuItem.map((item: any, key: number) => {
        if (item?.href === router.pathname) setActiveMenuIndex(key);
      });
    }
  }, [router.pathname]);

  const onOpenMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="lg:mx-24 mx-5 my-5 waper_menu">
        <div className="menu flex justify-between items-center	">
          <img src={logo.src} />
          <div className="text-base	menu_function">
            {menuItem.map((item: any, key: number) => (
              <Link
                key={item.name}
                href={item.href}
                className={`mx-3 ${
                  key === activeMenuIndex ? "text-red-500" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="text-base menu_login flex items-center gap-3 ">
            <a href="#">Đăng kí</a> / <a href="#">Đăng nhập</a>
            {open ? (
              <CloseOutlined
                style={{ color: "red" }}
                onClick={onOpenMenu}
                className="menu_outline"
              />
            ) : (
              <MenuOutlined
                style={{ color: "red" }}
                onClick={onOpenMenu}
                className="menu_outline"
              />
            )}
          </div>
        </div>
      </div>
      {open && (
        <div className="border-t-4  border-red-500 menu_horizontal">
          <div className="py-3 pl-5 border-b border-gray-300">Trang chủ</div>
          <div className="py-3 pl-5 border-b border-gray-300">Dự án</div>
          <div className="py-3  pl-5 border-b border-gray-300">
            Về chúng tôi
          </div>
          <div className="py-3 pl-5 border-b border-gray-300">FAQs</div>
          <div className="py-3 pl-5 border-b border-gray-300">
            Ủng hộ GiveNow
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
