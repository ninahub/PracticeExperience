function complaint_solution_check_form(){
	var valid_obj = {
		replace_book:{
			title:"代金卷数量",
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
		cash:{
			title:"现金量",
			auto_func:{
				type_func:"is_int"
			}
		},
		tourist_book:{
			title:"旅游卷数量",
			auto_func:{
				type_func:"is_int"
			}
		},
		guest_accept:{
			title:"客人是否接受，0为不接受，1接受",
			auto_func:{
				type_func:"is_int"
			}
		}
	};
	return check_form(valid_obj);
}
