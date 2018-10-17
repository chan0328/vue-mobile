const state={
	//下栏index
	tabIndex:0,
}
//$store.state.commonModel.bookChoose
const mutations = {
	changeIndex(state,val){
		state.tabIndex = val;
	},
}
const actions = {

}
export default{
	state,
	mutations,
	actions
}
