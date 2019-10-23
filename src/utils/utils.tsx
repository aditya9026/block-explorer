export const formatter = (data: any) => {
  let output = {userName: null, blockChainId: null, address: null, source: null, destination: null, memo: null}
  output.source = data.details.source
  output.destination = data.details.destination
  output.userName = data.details.username
  output.memo = data.details.memo
  output.address = data.details.targets && data.details.targets.length > 0 && data.details.targets[0].address ? data.details.targets[0].address : '-'
  return output
}