import { formatDate } from "@angular/common";
import { Component, OnInit, ɵsetCurrentInjector } from "@angular/core";
import { timeStamp } from "console";
import { ReviewService } from "src/services/reviews.service";

@Component({
    selector: 'review-component',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
    constructor(private reviewService: ReviewService) { }
    ngOnInit(): void {
        this.reviewSavedSuccess = false;
    }
    feedbackMsg = '';
    reviewSavedSuccess = false;
    submitFeedback(event: any) {

        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + '_' + time;

        this.reviewService.saveReview(this.feedbackMsg, "_review_" + dateTime + '.txt').subscribe((data: any) => {
            if (data) {
                this.feedbackMsg = "";
                this.reviewSavedSuccess = true;
            }
            console.log("Review Data is" + data);
        })


    }

}