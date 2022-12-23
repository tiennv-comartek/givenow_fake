import { SearchOutlined } from "@ant-design/icons";
import React, { useState } from "react";

function Supporter(props: any) {
  const [data, setData] = useState(props?.dataSupoter);
  const [dataSearch, setDataSearch] = useState<string>();
  const handleSearch = () => {
    if (dataSearch) {
      data.find((item: any) => item.name === dataSearch)
        ? setData(data.filter((item: any) => item.name === dataSearch))
        : setData(props?.dataSupoter);
    } else setData(props.dataSupoter);
  };
  return (
    <>
      <div className="relative w-full">
        <input
          className="rounded-md border px-2 py-1 w-full"
          placeholder="Nhập tên người bạn muốn tìm"
          onChange={(e) => {
            setDataSearch(e.target.value);
          }}
        />
        <button
          className="flex-shrink-0 absolute right-2"
          onClick={handleSearch}
        >
          <SearchOutlined />
        </button>
      </div>
      <table className="table-fixed w-full text-left mt-5 mb-8">
        <thead className="bg-gray-100 ">
          <tr className="rounded-lg">
            <th className="py-4 pl-8">Người ủng hộ</th>
            <th>Số tiền</th>
            <th>Thời gian</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, key: any) => (
            <tr key={key} className=" border-b border-gray-200 border-collapse">
              <td className="py-4 pl-8">{item.name}</td>
              <td>{item.donation_amount}</td>
              <td>09:56:33 - 12/12/2022</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Supporter;
