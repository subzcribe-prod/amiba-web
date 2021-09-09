import { getApis } from "../actions/apis";

export const loadApis = async (token, projectid, dispatch) => {
  const res = await getApis(token, projectid);
  if (res.data.data.endpoints && res.data.data.endpoints.length > 0)
    dispatch({
      type: "LOAD_APIS",
      payload: { [projectid]: res.data.data.endpoints },
    });
};
