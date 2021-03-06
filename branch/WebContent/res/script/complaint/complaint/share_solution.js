function share_solution_check_form(){
	var valid_obj = {
		total:{
			title:"赔偿总额",
			auto_func:{
				type_func:"is_int"
			}
		},
		supplier_mark:{
			title:"供应商确认状态,0为未确认，1为确认",
			auto_func:{
				type_func:"is_int"
			}
		},
		replace_book:{
			title:"抵用卷",
			auto_func:{
				type_func:"is_int"
			}
		},
		gift:{
			title:"礼品折合",
			auto_func:{
				type_func:"is_int"
			}
		},
		complaint_id:{
			title:"关联投诉id",
			auto_func:{
				type_func:"is_int"
			}
		},
		tourist_book:{
			title:"旅游卷",
			auto_func:{
				type_func:"is_int"
			}
		},
		cash:{
			title:"现金",
			auto_func:{
				type_func:"is_int"
			}
		},
		special:{
			title:"特殊费用",
			auto_func:{
				type_func:"is_int"
			}
		},
		employee:{
			title:"员工确认状态",
			auto_func:{
				type_func:"is_int"
			}
		}
	};
	return check_form(valid_obj);
}
