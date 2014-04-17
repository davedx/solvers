var status = function() {
    switch(this.status) {
    	case 'ready': return 'Ready for Solvers';
        case 'tasks': return 'In Progress';
        case 'solved': return 'Project Solved!';
    }
};

Template.progress.helpers({
	projectStatus: status
});

Template.progressEditable.helpers({
	projectStatus: status
});

Template.progressBar.helpers({
    statusCompletion: function() {
        switch (this.status) {
            case 'ready':
                return 33;
                break;
            case 'tasks':
                return 66;
                break;
            case 'solved':
                return 100;
                break;
        }
    }
});