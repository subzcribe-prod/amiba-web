//  check if a json is valid array or not
export default function (json) {
  // const stringified = JSON.stringify(json);
  try {
    const parsed = JSON.parse(json);
    // if (Array.isArray(parsed)) {
    const stringified = JSON.stringify(json);
    return {
      parsed,
      stringified,
      valid: true,
    };
    // }
    // return { valid: false, stringified: null, parsed: null };
  } catch (error) {
    console.log("error: ", error);
  }
  return { valid: false, stringified: null, parsed: null };
}
