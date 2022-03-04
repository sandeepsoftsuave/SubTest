import { DOMAIN_TYPE } from "./constants";
import { setDomainType, setAppAPIKey} from "./localstore";

export const getDomain = () => {
  const websiteUrl = window.location.href;
  const protocol = window.location.protocol;

  let domain = "";
  let isGenerali = false;

  const numintecTest = "//test.invoxcontact.io";
  const numintecStaging = "//staging.invoxcontact.io";
  const numintecProd = "//go.invoxcontact.io";
  const generaliTest = "//gtest.invoxcontact.io";
  const generaliStaging = "//gstaging.invoxcontact.io";
  const generaliProd = "//ggo.invoxcontact.io";
  const generaliOldProd = "//go-generali.invoxcontact.io";

  const X_API_KEY = "c0rn05wuqo8F8AspQ5mtD5NaPyJ8SIcQ8gUbhovV";
  const GENERALI_X_API_KEY = "NBYZjmSWHC6xx1z6taBGr8h47BOrxdeA1w86E2wX";

  if (websiteUrl.includes(numintecTest)) {
    domain = protocol + numintecTest;
  } else if (websiteUrl.includes(numintecStaging)) {
    domain = protocol + numintecStaging;
  } else if (websiteUrl.includes(numintecProd)) {
    domain = protocol + numintecProd;
  } else if (websiteUrl.includes(generaliTest)) {
    domain = protocol + generaliTest;
    isGenerali = true;
  } else if (websiteUrl.includes(generaliStaging)) {
    domain = protocol + generaliStaging;
    isGenerali = true;
  } else if (websiteUrl.includes(generaliProd)) {
    domain = protocol + generaliProd;
    isGenerali = true;
  } else if (websiteUrl.includes(generaliOldProd)) {
    domain = protocol + generaliOldProd;
    isGenerali = true;
  } else {
    domain = protocol + numintecTest;
  }

  setDomainType(isGenerali ? DOMAIN_TYPE.generali : DOMAIN_TYPE.numintec);
  setAppAPIKey(isGenerali ? GENERALI_X_API_KEY : X_API_KEY)

  return domain;
};
