import brokerageArray from './brokerages.json';
import contactsArray from './contacts.json';

const getRandomLogo = async () => {
  const response = await fetch('https://loremflickr.com/640/480/realestate');
  return response.url;
};

export interface ContactType {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  title: string;
  avatar: string;
}

interface BrokerageJsonType {
  id: string;
  name: string;
  catchPhrase: string;
}

export interface BrokerageType extends BrokerageJsonType {
  logo: string;
  contacts: ContactType[];
}

const PAGE_SIZE = 40;
const saveCache = (cache: any) => {
  const stringifiedCache = typeof cache === 'object' ? JSON.stringify(cache) : "{}"
  localStorage.setItem('imageCache', stringifiedCache);
}

const loadCache = () => {
  let localCache = localStorage.getItem('imageCache') || "{}";
  return JSON.parse(localCache)
}

const imageCache: any = loadCache()

export const fetchBrokerages = async (first=PAGE_SIZE): Promise<BrokerageType[]> => {
  return Promise.all(
    brokerageArray.slice(0, first).map(async (brokerage: BrokerageJsonType, i) => {
      const cacheKey = brokerage.id;
      const image = imageCache[cacheKey]
      let logo;
      if (!image) {
        logo = await getRandomLogo()
        imageCache[cacheKey] = logo;
        saveCache(imageCache)
      } else {
        logo = imageCache[cacheKey];
      }
      return {
        ...brokerage,
        logo,
        contacts: [
          contactsArray[i],
          contactsArray[i + 1],
          contactsArray[i + 2],
          contactsArray[i + 3],
          contactsArray[i + 4],
        ],
    }
    })
  )
};
