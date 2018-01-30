import { TweenMax, Elastic } from 'gsap';

const duration = 0.5;

export default {
	show(target, cb) {
		return TweenMax
			.from(target, duration, {
				opacity: 0,
				height: 0,
				onComplete() {
					cb();
				},
				ease: Elastic.easeOut.config(0.25, 1),
			});
	},
	hide(target, cb) {
		return TweenMax
			.to(target, duration, {
				opacity: 0,
				height: 0,
				onComplete() {
					cb();
				},
				ease: Elastic.easeIn.config(0.25, 1),
			});
	},
	enterRight(target, cb) {
		return TweenMax
			.from(target, duration, {
				css:{
					left: "500px",
					top: "180px"
				},
				onComplete() {
					cb();
				},
				ease: Elastic.easeIn.config(0.25, 1),				
			});
	},
	leaveLeft(target, cb) {
		return TweenMax
			.to(target, duration, {
				opacity: 0,
				height: 0,
				left: 0,
				onComplete() {
					cb();
				},
				ease: Elastic.easeIn.config(0.25, 1),
			});
	},
};