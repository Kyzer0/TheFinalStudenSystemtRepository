"""
Routes and views for the flask application.
"""

from datetime import datetime
from flask import render_template 
from ClassAttendanceSystem import app

@app.route('/')
@app.route('/home')
def home():
    """Renders the home page."""
    return render_template(
        'index.html',
        title='Home Page',
        year=datetime.now().year,
    )

@app.route('/Login')
def Login():
    """Renders the contact page."""
    app.logger.info('Navigating to teachersLogin page')
    return render_template(
        'Login.html',
        title='Teachers Account',
        year=datetime.now().year,
        message='Account page.'
    )


@app.route('/dashboard')
def dashboard():
    """Renders the attendance Page"""
    return render_template(
        'dashboard.html',
        title='Attendance',
        year=datetime.now().year,
        message='Attendance Domain'
    )

@app.route('/create_section')
def create_section():
    """Renders the about page."""
    return render_template(
        'create_section.html',
        title='About',
        year=datetime.now().year,
        message='Your application description page.'
    )

@app.route('/manage_sections')
def manage_sections():
    """Renders the about page."""
    return render_template(
        'manage_sections.html',
        title='Section Adding',
        year=datetime.now().year,
        message='Add a section.'
    )

@app.route('/attendance')
def attendance():
    """Renders the about page."""
    return render_template(
        'attendance.html',
        title='Section Adding',
        year=datetime.now().year,
        message='Add a section.'
    )


@app.route('/logout')
def logout():
    """Renders the about page."""
    return redirect(url_for('login'))  
