
import env from "@/configs/env";
  

  export function formatPrice(price: number) {
    // format number 1000000 to 1,234,567
    return price.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")+'đ';
  }

  export const checkRegexEmail = (str: string) => {
    const reg =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(str)) {
      return true;
    } else {
      return false;
    }
  };


  export function toFixedPrice(price: number, toFixed?: number) {
    return price.toFixed(!isNaN(toFixed) ? toFixed : 2);
  }
 
  export function getFileUrl(url?: string) {
    return env.assetsEndPoint + url;
  }

  
/**
 * use when you need to separate number with ','
 * @param number number you need to separate
 * @param decimalLength number of gì vậy ?
 */
export const formatNumberStr = (
  number: number | null | undefined,
  decimalLength = 2
) => {
  if (number === 0) return "0";
  if (!number || isNaN(number)) return "";
  if (number.toString().includes(".")) {
    const numberParseArray = number.toString().split(".");
    const evenSection = numberParseArray[0];
    const decimalSection = numberParseArray[1];
    decimalLength =
      decimalLength > decimalSection.length
        ? decimalSection.length
        : decimalLength;
    return `${evenSection.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      "."
    )},${decimalSection.substring(0, decimalLength)}`;
  }
  return `${number}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const numberParser = (value: string | undefined, decimalLength = 2) => {
  if (value?.toString().includes(",")) {
    const numberParseArray = value.split(",");
    const evenSection = numberParseArray[0];
    const decimalSection = numberParseArray[1];
    decimalLength =
      decimalLength > decimalSection.length
        ? decimalSection.length
        : decimalLength;
    return Number(
      `${evenSection.replaceAll(".", "")}.${decimalSection.substring(
        0,
        decimalLength
      )}`
    );
  }
  return Number(value?.toString().replaceAll(".", "") || undefined);
};


export const getProjectImageV1Url = (url: string) => {
  return `${env.projectImageUrl}/${url}`
}

export const getProjectV1Url = (url: string) => {
  return `${env.projectUrl}/${url}`
}