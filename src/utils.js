export const parseConfigSectionTitle = (string_from_config_file) => { 
  
  let newString = []
  
  newString.push((string_from_config_file[0]).toUpperCase())

  for (let i = 1; i < string_from_config_file.length; i++) {
    let charInString = string_from_config_file[i]

    if (charInString == '_') {
      charInString = ' '
    }
    newString.push(charInString)
  }

  return newString
}
