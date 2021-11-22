from flask import Flask, request
from pyhtml import html, form, textarea, input_, p

app = Flask(_name_)

@app.route('/', methods=["GET", "POST"])
def main_page():
        
    response = html(
        form(action="/display_analysis")(
        textarea(name="text", rows="4", cols="50"),
        input_(type="submit")
        )
    )
    return str(response)

@app.route('/display_analysis', methods=["POST"])
def display_analysis():

    print(f"\n{request.form}\n")

    character_without_punctuation = len(str(request.form.get('text'))) - (request.form.get('text')).count(".")
    number_of_word = character_without_punctuation - request.form.get('text').count(" ")
    analysis = "Your text has " + str(len(str(request.form.get('text')))) + " characters, " + str(character_without_punctuation) + " characters without punctuation and " + str(number_of_word) + " words " 
    response = html(
        p(analysis)
    )
    return str(response)

if _name_ == "_main_":
    app.run(debug=True)