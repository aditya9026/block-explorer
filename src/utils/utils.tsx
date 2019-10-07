export const formatter = (data:string) => {
  let output = {userName: null, blockChainId: null, address: null}, message, details
  message = JSON.parse(data)
  details = JSON.parse(message.details)
  output.userName = details.username
  output.blockChainId = details.targets && details.targets.length > 0 && details.targets[0].blockchain_id ? details.targets[0].blockchain_id : '-'
  output.address = details.targets && details.targets.length > 0 && details.targets[0].address ? details.targets[0].address : '-'
  return output
}