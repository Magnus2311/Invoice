import { toast } from "react-toastify";

const baseUrl = "/api/my-company";

export const updateCompanyData = async (myCompany) => {
  var response = await fetch(`${baseUrl}`, {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(myCompany),
  });
  if (response.ok) {
    toast.success("Данните за фирмата бяха обновени успешно!");
  } else {
    toast.error(
      "Възникна проблем при обновяването на данните. Моля опитайте отново!"
    );
  }
};
