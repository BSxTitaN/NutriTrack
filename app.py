import os
import json
from flask import Flask, request, jsonify, render_template
from langchain.prompts import PromptTemplate
from langchain.llms import OpenAI
from langchain.chains import LLMChain

app = Flask(__name__)

# Set your OpenAI API key
os.environ['OPENAI_API_KEY'] = ''

# Initialize the LLM
llm_resto = OpenAI(temperature=0.6, model_name='gpt-3.5-turbo')

# Define the prompt template
prompt_template = PromptTemplate(
    input_variables=[
        'age', 'gender', 'weight', 'height', 'veg_or_nonveg',
        'disease', 'allergics', 'foodtype', 'previous_days_data'
    ],
    template=(
        'Diet Recommendation System:\n'
        'I want you to recommend what I should have for breakfast, lunch, and dinner today. Also, recommend workout names based on the following details of a person:\n'
        'Age: {age}\n'
        'Gender: {gender}\n'
        'Weight (in Kilograms): {weight}\n'
        'Height (in Centimeters): {height}\n'
        'Vegetarian or non-vegetarian: {veg_or_nonveg}\n'
        'Disease: {disease}\n'
        'Allergies: {allergics}\n'
        'Food Type: {foodtype}\n'
        'Previous 2-3 days\' data:\n'
        '{previous_days_data}\n'
        'Give me the output in JSON format (keep output variable constant every time).'
    )
)

# Initialize the chain
chain = LLMChain(llm=llm_resto, prompt=prompt_template)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_recommendation', methods=['POST'])
def get_recommendation():
    # Get the user input from the form
    input_data = {
        'age': request.form['age'],
        'gender': request.form['gender'],
        'weight': request.form['weight'],
        'height': request.form['height'],
        'veg_or_nonveg': request.form['veg_or_nonveg'],
        'disease': request.form['disease'],
        'allergics': request.form['allergics'],
        'foodtype': request.form['foodtype'],
        'previous_days_data': request.form['previous_days_data']
    }

    # Run the chain with the input data
    results = chain.run(input_data)
    data = json.loads(results)

    # Return the results as a JSON response
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
