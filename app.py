from flask import Flask, render_template, url_for, request
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
 
app = Flask(__name__)

@app.route("/")
@app.route("/index")
def index():
	return render_template("index.html")


@app.route('/predict', methods=['post'] )
def predict():
	data_frame= pd.read_csv('CommentsData.csv')
	df_data= data_frame[["Comment", "Spam"]]
	df_x= df_data['Comment']
	df_y= df_data.Spam
	compus= df_x
	cv=CountVectorizer()
	X= cv.fit_transform(compus)
	X_train, X_test, y_train, y_test= train_test_split(X, df_y, test_size= 0.33, random_state=44)
	clf= MultinomialNB()
	clf.fit(X_train, y_train)
	clf.score(X_test, y_test)


	if request.method== 'post':
		comment= request.form['comment']
		data= [comment]
		vector= cv.transform(data).toarray()
		my_prediction= clf.predict(vector)

	return render_template('result.html', prediction= my_prediction) 


if __name__ == '__main__':
	app.run(debug=True)