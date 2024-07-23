from flask import Flask, request, jsonify
from flask_cors import CORS
from textblob import TextBlob
from pymongo import MongoClient
import os

app = Flask(__name__)
CORS(app)

# MongoDB connection
mongo_uri = os.getenv("MONGO_URI", "mongodb://localhost:27017/")
client = MongoClient(mongo_uri)
db = client['movie_reviews']
reviews_collection = db['reviews']

def analyze_sentiment(text):
    analysis = TextBlob(text)
    sentiment_polarity = analysis.sentiment.polarity
    if sentiment_polarity > 0:
        return 'positive'
    elif sentiment_polarity < 0:
        return 'negative'
    else:
        return 'neutral'

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    review_text = data['review']
    movie_id = data['movie_id']
    sentiment = analyze_sentiment(review_text)
    review_data = {
        "movie_id": movie_id,
        "review": review_text,
        "sentiment": sentiment
    }
    reviews_collection.insert_one(review_data)
    return jsonify({'sentiment': sentiment})

@app.route('/reviews/<int:movie_id>', methods=['GET'])
def get_reviews(movie_id):
    reviews = list(reviews_collection.find({"movie_id": movie_id}))
    for review in reviews:
        review["_id"] = str(review["_id"])
    return jsonify(reviews)

if __name__ == '__main__':
    app.run(debug=True)
