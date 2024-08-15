import { log, setGlobalPrefix } from 'baiwusanyu-utils';
import { deleteAsync } from 'del';

const OUTPUT_NODE_MODULES = [
	'../dist',
	'../packages/**/dist',
	'../play/**/dist',
	'../docs/.vitepress/**/dist',
	'../playground/**/dist',
	'../docs/**/dist',
];
async function doCleanOutput() {
	// set log prefix
	setGlobalPrefix('[vue-tea]: ');

	log('info', 'Start clearing all output.');
	try {
		// remove dist from packages
		await deleteAsync(OUTPUT_NODE_MODULES, { force: true});

		log('info', 'Finished cleaning all output.');
	} catch (e) {
		log('error', e);
	}
}

doCleanOutput();
